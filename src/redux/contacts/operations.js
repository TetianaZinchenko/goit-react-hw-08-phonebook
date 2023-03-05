import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'services/API';

import { toast } from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.fetchAllContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await API.postContact(contact);
      return response;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async ({ id, name }, { rejectWithValue }) => {
    try {
      await API.deleteContactById(id);
      toast.success(`Contact ${name} was deleted!`);
      return id;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
