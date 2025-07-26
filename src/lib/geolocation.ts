export interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
  zipCode?: string;
  city?: string;
  state?: string;
}

export interface GeolocationError {
  message: string;
  code: number;
}

export const getCurrentLocation = (): Promise<LocationData> => {
  return new Promise(async (resolve, reject) => {
    if (!navigator.geolocation) {
      reject({
        message: "Geolocation is not supported by your browser. Please enter location manually.",
        code: 0,
      });
      return;
    }

    // Check if site is served over HTTPS (required for geolocation on mobile)
    if (
      location.protocol !== "https:" &&
      !location.hostname.includes("localhost") &&
      location.hostname !== "127.0.0.1"
    ) {
      reject({
        message: "Location services require a secure connection (HTTPS). Please enter your address manually.",
        code: 2,
      });
      return;
    }

    // Special handling for localhost on mobile devices
    if (
      location.protocol === "http:" &&
      (location.hostname.includes("localhost") || location.hostname === "127.0.0.1")
    ) {
      // Check if we're on a mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        reject({
          message:
            "Location services don't work on mobile devices with localhost. For testing: 1) Use your computer's IP address (e.g., http://192.168.1.100:3000), 2) Use ngrok for HTTPS, or 3) Enter address manually.",
          code: 3,
        });
        return;
      }
    }

    // Check permission status first if available
    if (navigator.permissions) {
      try {
        const permission = await navigator.permissions.query({ name: "geolocation" });

        if (permission.state === "denied") {
          reject({
            message:
              "Location access is blocked. To enable: Go to Settings → Safari → Location Services → Website Settings and allow location access.",
            code: 1,
          });
          return;
        }
      } catch {
        // Permission API not supported, continue with normal flow
        console.log("Permission API not supported, proceeding with geolocation request");
      }
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const pos: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        try {
          // Attempt to get address using reverse geocoding
          const addressData = await reverseGeocode(pos.latitude, pos.longitude);
          resolve({ ...pos, ...addressData });
        } catch {
          // Return coordinates even if reverse geocoding fails
          resolve(pos);
        }
      },
      (error) => {
        let message = "Could not get your location. Please enter it manually.";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            message =
              "Location access denied. iPhone troubleshooting: 1) Settings → Privacy & Security → Location Services → ON, 2) Settings → Safari → Location Services → While Using App, 3) In Safari: tap 'aA' → Website Settings → Location → Allow. Then refresh page.";
            break;
          case error.POSITION_UNAVAILABLE:
            message =
              "Location information unavailable. Please check your internet connection and try again, or enter your address manually.";
            break;
          case error.TIMEOUT:
            message = "Location request timed out. Please try again or enter your address manually.";
            break;
        }

        reject({
          message,
          code: error.code,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 300000,
      }
    );
  });
};

const reverseGeocode = async (lat: number, lng: number): Promise<Partial<LocationData>> => {
  try {
    // Using OpenStreetMap Nominatim API for reverse geocoding (free)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
    );

    if (!response.ok) {
      throw new Error("Geocoding failed");
    }

    const data = await response.json();

    if (data && data.address) {
      const address = data.address;

      // Build formatted address
      const addressParts = [
        address.house_number,
        address.road,
        address.neighbourhood,
        address.suburb,
        address.city || address.town || address.village,
        address.state,
      ].filter(Boolean);

      return {
        address: addressParts.join(", "),
        zipCode: address.postcode || "",
        city: address.city || address.town || address.village || "",
        state: address.state || "",
      };
    }

    return {};
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return {};
  }
};
