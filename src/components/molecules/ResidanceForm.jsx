import React, { useEffect, useState } from 'react';
import { getCountry } from '../../API/endpoint/country';
import { Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { getCity } from '../../API/endpoint/city';

export default function ResidanceForm() {
  const [countries, setCountries] = useState([]);
  const [country ,setCountry] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const getCountryData = async () => {
    try {
      const response = await getCountry();
      setCountries(response.data.data);
    } catch (error) {
      toast.error('Error fetching countries');
    }
  };

  const getCityData = async (country) => {
    try {
      const response = await getCity(country); 
      const filterCity = response.data.data.filter((city)=>city.country ==country)
      setCities(filterCity);
    } catch (error) {
      toast.error('Error fetching cities');
    }
  };

  useEffect(() => {
    getCountryData();
  }, []);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    getCityData(country);
  };

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required('Name is required'),
    Country: Yup.string().required('Country is required'),
    City: Yup.string().required('City is required'),
    Description: Yup.string(),
    Address: Yup.string(),
    Image: Yup.mixed(),
    Email: Yup.string().email('Invalid email address').required('Email is required'),
    PhoneNumber: Yup.string().required('Phone Number is required'),
    FloorsNumber: Yup.number().min(1, 'Number of floors must be at least 1').required('Floors Number is required'),
    Rating: Yup.number().min(1, 'Rating must be between 1 and 5').max(5, 'Rating must be between 1 and 5'),
    CityId: Yup.string(),
    ResidenceTypeId: Yup.string(),
  });

  return (
    <div className="container mx-auto p-4">
      <Formik
        initialValues={{
          Name: '',
          Country: '',
          City: '',
          Description: '',
          Address: '',
          Image: '',
          Email: '',
          PhoneNumber: '',
          FloorsNumber: '',
          Rating: '',
          CityId: '',
          ResidenceTypeId: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name</label>
                <Field
                  type="text"
                  name="Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="Name" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              
              <div className="flex-1">
                <label htmlFor="Country" className="block text-sm font-medium text-gray-700">Country</label>
                <Field
                  as="select"
                  name="Country"
                  onChange={(event) => {
                    handleChange(event);
                    handleCountryChange(event);
                    setCountry(event.value)
                  }}
                  onBlur={handleBlur}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option hidden label="Select country" />
                  {countries.map((country) => (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="Country" component="div" className="text-red-600 text-sm mt-1" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="City" className="block text-sm font-medium text-gray-700">City</label>
                <Field
                  as="select"
                  name="City"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.City}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" label="Select city" />
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="City" component="div" className="text-red-600 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="Description" className="block text-sm font-medium text-gray-700">Description</label>
              <Field
                type="text"
                name="Description"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="Description" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Address" className="block text-sm font-medium text-gray-700">Address</label>
              <Field
                type="text"
                name="Address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="Address" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Image" className="block text-sm font-medium text-gray-700">Image</label>
              <input
                type="file"
                name="Image"
                onChange={(event) => {
                  setFieldValue('Image', event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
              />
              <ErrorMessage name="Image" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                type="email"
                name="Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="Email" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Field
                type="text"
                name="PhoneNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="PhoneNumber" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="FloorsNumber" className="block text-sm font-medium text-gray-700">Number of Floors</label>
              <Field
                type="number"
                name="FloorsNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="FloorsNumber" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Rating" className="block text-sm font-medium text-gray-700">Rating</label>
              <Field
                type="number"
                name="Rating"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="Rating" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="CityId" className="block text-sm font-medium text-gray-700">City ID</label>
              <Field
                type="text"
                name="CityId"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="CityId" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="ResidenceTypeId" className="block text-sm font-medium text-gray-700">Residence Type ID</label>
              <Field
                type="text"
                name="ResidenceTypeId"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="ResidenceTypeId" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
