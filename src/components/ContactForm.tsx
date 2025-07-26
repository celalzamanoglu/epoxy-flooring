"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaSpinner, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { getCurrentLocation, LocationData, GeolocationError } from "@/lib/geolocation";
import Button from "./Button";
import styles from "./ContactForm.module.css";

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectType: string;
  floorSize: string;
  address: string;
  zipCode: string;
  preferredContact: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    projectType: "",
    floorSize: "",
    address: "",
    zipCode: "",
    preferredContact: "",
  });

  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetLocation = async () => {
    setIsGettingLocation(true);
    setLocationError("");

    try {
      const locationData: LocationData = await getCurrentLocation();

      setFormData((prev) => ({
        ...prev,
        address: locationData.address || `${locationData.latitude}, ${locationData.longitude}`,
        zipCode: locationData.zipCode || "",
      }));
    } catch (error) {
      const geoError = error as GeolocationError;
      setLocationError(geoError.message);
    } finally {
      setIsGettingLocation(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would normally send the data to your backend
      console.log("Form submitted:", formData);
      alert("Thank you! We'll be in touch soon.");

      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        projectType: "",
        floorSize: "",
        address: "",
        zipCode: "",
        preferredContact: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Get Your Free Quote</h2>
        <p className={styles.formDescription}>
          Fill out the form below and we&apos;ll get back to you with a personalized quote for your project.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="(555) 123-4567"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address <span className={styles.recommended}>(recommended)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="projectType" className={styles.label}>
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="">Select project type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="floorSize" className={styles.label}>
              Floor Size (sq ft)
            </label>
            <input
              type="number"
              id="floorSize"
              name="floorSize"
              value={formData.floorSize}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g., 1500"
              min="1"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Preferred Contact Method</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="preferredContact"
                  value="call"
                  checked={formData.preferredContact === "call"}
                  onChange={handleInputChange}
                  className={styles.radio}
                />
                <span className={styles.radioText}>Call</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="preferredContact"
                  value="text"
                  checked={formData.preferredContact === "text"}
                  onChange={handleInputChange}
                  className={styles.radio}
                />
                <span className={styles.radioText}>Text</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={handleInputChange}
                  className={styles.radio}
                />
                <span className={styles.radioText}>Email</span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.locationSection}>
          <div className={styles.locationHeader}>
            <label className={styles.label}>Project Address</label>
            <button
              type="button"
              onClick={handleGetLocation}
              disabled={isGettingLocation}
              className={styles.locationButton}
            >
              {isGettingLocation ? (
                <>
                  <FaSpinner className={styles.spinner} />
                  Getting location...
                </>
              ) : (
                <>
                  <FaMapMarkerAlt />
                  Use My Location
                </>
              )}
            </button>
          </div>

          {locationError && (
            <div className={styles.error}>
              <p>{locationError}</p>
              {(locationError.includes("denied") || locationError.includes("localhost")) && (
                <details className={styles.troubleshooting}>
                  <summary>
                    {locationError.includes("localhost")
                      ? "🛠️ Development Mode Solutions:"
                      : "📱 Still not working? Try these steps:"}
                  </summary>
                  {locationError.includes("localhost") ? (
                    <ol>
                      <li>
                        <strong>Use your computer&apos;s IP address:</strong> Replace localhost with your local IP
                        (e.g., http://192.168.1.100:3000)
                      </li>
                      <li>
                        <strong>Use ngrok for HTTPS:</strong> Run &quot;npx ngrok http 3000&quot; for a secure tunnel
                      </li>
                      <li>
                        <strong>Test on desktop:</strong> Location works fine on desktop browsers with localhost
                      </li>
                      <li>
                        <strong>For now:</strong> Just enter your address manually to test the form
                      </li>
                    </ol>
                  ) : (
                    <ol>
                      <li>
                        <strong>Check Device Settings:</strong> Settings → Privacy & Security → Location Services → Make
                        sure it&apos;s ON
                      </li>
                      <li>
                        <strong>Check Safari Settings:</strong> Settings → Safari → Location Services → Set to
                        &quot;While Using App&quot;
                      </li>
                      <li>
                        <strong>Clear Website Data:</strong> Settings → Safari → Advanced → Website Data → Remove this
                        site
                      </li>
                      <li>
                        <strong>In Safari Browser:</strong> Tap the &quot;aA&quot; icon in address bar → Website
                        Settings → Location → Allow
                      </li>
                      <li>
                        <strong>Alternative:</strong> Try using a different browser like Chrome or Firefox
                      </li>
                    </ol>
                  )}
                </details>
              )}
            </div>
          )}

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="address" className={styles.label}>
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your project address"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="zipCode" className={styles.label}>
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="12345"
              />
            </div>
          </div>
        </div>

        <div className={styles.submitSection}>
          <Button size="large" onClick={() => {}} className={styles.submitButton}>
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </Button>
        </div>
      </form>

      {/* Contact Information Section */}
      <div className={styles.contactInfoSection}>
        <div className={styles.contactInfoHeader}>
          <h3 className={styles.contactInfoTitle}>Other Ways to Reach Us</h3>
          <p className={styles.contactInfoSubtitle}>
            Prefer to contact us directly? Here are all the ways you can reach our team.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <FaMapMarkerAlt />
            </span>
            <div className={styles.contactDetails}>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactText}>Based in South Florida – Serving Nationwide</span>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <FaPhone />
            </span>
            <div className={styles.contactDetails}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:323-333-7383" className={styles.contactLink}>
                Call or Text 323-333-7383
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <FaEnvelope />
            </span>
            <div className={styles.contactDetails}>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:info@milkywayepoxy.com" className={styles.contactLink}>
                info@milkywayepoxy.com
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <FaWhatsapp />
            </span>
            <div className={styles.contactDetails}>
              <span className={styles.contactLabel}>WhatsApp</span>
              <a
                href="https://wa.link/milkywayepoxy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Click to Message Us
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <FaInstagram />
            </span>
            <div className={styles.contactDetails}>
              <span className={styles.contactLabel}>Instagram</span>
              <a
                href="https://instagram.com/milkywayepoxy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @milkywayepoxy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
