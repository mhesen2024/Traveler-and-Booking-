import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { addCountry } from '../../API/endpoint/country';
import toast, { Toaster } from 'react-hot-toast';

export default function CountryForm() {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);

    const formData = new FormData();
    formData.append('Name', values.Name);
    formData.append('Description', values.Description);
    if (values.Image) {
      formData.append('Image', values.Image);
    }

    try {
      const response = await addCountry(formData); // تأكد أن addCountry تدعم FormData
      console.log(response.status);

      if (response.status !== 200) {
        toast.error('Failed to add country');
      } else {
        toast.success('Country added successfully');
        resetForm(); 
      }
    } catch (error) {
      toast.error('An error occurred while adding the country');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Formik
        initialValues={{ Name: '', Description: '', Image: null }}
        validate={values => {
          const errors = {};
          if (!values.Name) {
            errors.Name = 'Required';
          }
          if (!values.Description) {
            errors.Description = 'Required';
          }
          return errors;
        }}
        onSubmit={handleSubmit} 
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="Name" className="block text-sm font-semibold text-gray-700 mb-1">
                Country Name
              </label>
              <Field
                type="text"
                name="Name"
                placeholder="Enter the country name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Name}
              />
              {touched.Name && errors.Name && <div className="text-red-500 text-sm mt-1">{errors.Name}</div>}
            </div>
            
            <div>
              <label htmlFor="Description" className="block text-sm font-semibold text-gray-700 mb-1">
                Description
              </label>
              <Field
                as="textarea"
                name="Description"
                rows="4"
                placeholder="Enter a description"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Description}
              />
              {touched.Description && errors.Description && <div className="text-red-500 text-sm mt-1">{errors.Description}</div>}
            </div>

            <div>
              <label htmlFor="Image" className="block text-sm font-semibold text-gray-700 mb-1">
                Image
              </label>
              <input
                id="Image"
                name="Image"
                type="file"
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("Image", file);
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}
