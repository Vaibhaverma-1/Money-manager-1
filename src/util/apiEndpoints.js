export const BASE_URL = "https://money.34-14-204-50.nip.io/api/v1.0";
const CLOUDINARY_CLOUD_NAME = "df6hgnhyv";

export const API_ENDPOINTS = {
  // very likely these should be /auth/*
  LOGIN: "/auth/login",
  REGISTER: "/auth/signup",        // or "/auth/register" if your backend uses that

  GET_USER_INFO: "/profile",
  GET_ALL_CATEGORIES: "/categories",
  ADD_CATEGORY: "/categories",
  UPDATE_CATEGORY: (categoryId) => `/categories/${categoryId}`,
  CATEGORY_BY_TYPE: (type) => `/categories/${type}`,

  GET_ALL_INCOMES: "/incomes",
  ADD_INCOME: "/incomes",
  DELETE_INCOME: (incomeId) => `/incomes/${incomeId}`,

  GET_ALL_EXPENSE: "/expenses",
  ADD_EXPENSE: "/expenses",
  DELETE_EXPENSE: (expenseId) => `/expenses/${expenseId}`,

  // FIX: add leading slash
  INCOME_EXCEL_DOWNLOAD: "/excel/download/income",
  EXPENSE_EXCEL_DOWNLOAD: "/excel/download/expense",

  EMAIL_INCOME: "/email/income-excel",
  EMAIL_EXPENSE: "/email/expense-excel",

  // confirm your backend actually has this route; many APIs use /overview or /stats instead
  DASHBOARD_DATA: "/dashboard",

  UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
};
