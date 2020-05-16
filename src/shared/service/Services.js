import {
  GOOGLE_SIGNIN,
  REGISTER_TENANT,
  TENANT_LIST,
  TENANT_STATUS,
  USER_DETAILS,
  USER_NOTIFICATION,
  USER_STATISTICS,
} from "../configure/Config";
import Api, { Api1, downloadApi } from "../Helper/Helper";

// //sign in services
// export const registerTenant = (params) => {
//   return Api(REGISTER_TENANT, params, "POST", false);
// };

// export const renewSubscription = (params) => {
//   return Api(RENEW_SUBSCRIPTION, params, "POST", false);
// };

export const googleSignIn = (params) => {
  return Api(GOOGLE_SIGNIN, params, "POST", false); 
};

export const RegisterTenant = (params) =>{
  return Api(REGISTER_TENANT, params, "POST",false)
}

// export const tenantList = (params) =>{
//   return Api(TENANT_LIST,)
// }

// //account services

// export const accountManagerExists = (id) => {
//   return Api(ACC_EXISTS + id, null, "GET", true);
// };

// export const requestAccountant = () => {
//   return Api(REQUEST_ACCOUNTANT, null, "GET", true);
// };

// export const getUserdetails = () => {
//   return Api(USER_DETAILS, null, "GET", true);
// };

// export const getUsers = () => {
//   return Api(GET_USERS, null, "GET", true);
// };

// export const userStatistics = (params) => {
//   return Api(USER_STATISTICS, params, "POST", true);
// };

// //sider services

// export const getBadgesCount = () => {
//   return Api(BADGES_COUNT, null, "GET", true);
// };

// //expense services

// export const getExpenses = (params) => {
//   return Api(GET_EXPENSES, params, "POST", true);
// };

// export const createExpense = (params) => {
//   return Api(POST_EXPENSE, params, "POST", true);
// };

// export const editExpense = (id, params) => {
//   return Api(PUT_EXPENSE + id, params, "PUT", true);
// };

// export const deleteExpense = (id) => {
//   return Api(DELETE_EXPENSE + id, null, "DELETE", true);
// };

// export const getopenReports = () => {
//   return Api(GET_UNCLOSED_REPORTS, null, "GET", true);
// };

// export const fileUpload = (params) => {
//   return Api1(FILE_UPLOAD, params, "POST", true);
// };

// export const Category = () => {
//   return Api(CATEGORY, null, "GET", true);
// };

// export const getMerchants = () => {
//   return Api(GET_MERCHANTS, null, "GET", true);
// };

// //report services

// export const getReports = (params) => {
//   return Api(GET_REPORTS, params, "POST", true);
// };

// export const createReport = (params, token) => {
//   return Api(POST_REPORT, params, "POST", true);
// };

// export const _editReport = (params, id) => {
//   return Api(PUT_REPORT + id, params, "PUT", true);
// };

// export const getExpensesForReport = () => {
//   return Api(GET_EXPENSES_FOR_REPORT, null, "GET", true);
// };

// export const removeExpenseFromReport = (id, token) => {
//   return Api(DELETE_REPORT + id, null, "DELETE", true);
// };

// export const addExpenseToReport = () => {
//   return Api(GET_EXPENSES_FOR_REPORT, null, "GET", true);
// };

// export const deleteReport = (id, token) => {
//   return Api(DELETE_REPORT + id, null, "DELETE", true);
// };

// export const getReportByReportid = (id) => {
//   return Api(GET_REPORT_REPORTID + id, null, "GET", true);
// };

// export const shareReport = (id, params) => {
//   return Api(SHARE_REPORT + id, params, "POST", true);
// };

// export const downloadPdf = (id) => {
//   return downloadApi(DOWNLOAD_PDF + id, null, "GET", true);
// };

// //manager services

// export const reportApprovalList = (params) => {
//   return Api(MANAGER_APPROVAL_LIST, params, "POST", true);
// };

// export const getDefaultReasons = () => {
//   return Api(DEFAULT_REASONS, null, "GET", true);
// };

// export const approveReport = (id, params) => {
//   return Api(APPROVE_REPORT + id, params, "PUT", true);
// };

// export const declineReport = (id, params) => {
//   return Api(DECLINE_REPORT + id, params, "PUT", true);
// };

// export const reportPdfPreview = (repId) => {
//   return Api(REPORT_PDF_PREVIEW + repId, null, "GET", true);
// };

// export const reportIssueByManager = (id, params) => {
//   return Api(REPORT_ISSUE_BY_MANAGER + id, params, "PUT", true);
// };

// //Account manager services

// export const reportReimburseList = (params) => {
//   return Api(ACCOUNT_MANAGER_REIMBURSE_LIST, params, "POST", true);
// };

// export const getAllReportsOfAccountManager = (params) => {
//   return Api(ACCOUNT_MANAGER_ALLREPORTS, params, "POST", true);
// };

// export const reimburseReport = (id, params) => {
//   return Api(REIMBURSE_REPORT + id, params, "PUT", true);
// };

// export const exportDataToExcel = (fromDate, toDate) => {
//   return downloadApi(EXPORT_DATA + fromDate + "/" + toDate, null, "GET", true);
// };

// export const reportIssueByAccountManager = (id, params) => {
//   return Api(REPORT_ISSUE_BY_ACCOUNTMANAGER + id, params, "POST", true);
// };

// //super admin services (tenants)

// export const tenantStatus = (params) => {
//   return Api(TENANT_STATUS, params, "POST", true);
// };

// export const tenantList = () => {
//   return Api(TENANT_LIST, null, "GET", true);
// };

// //super admin services (requests)

// export const requestList = () => {
//   return Api(REQUEST_LIST, null, "GET", true);
// };

// export const adminAccept = (id) => {
//   return Api(ADMIN_ACCEPT + id, null, "GET", true);
// };

// export const adminDecline = (id) => {
//   return Api(ADMIN_DECLINE + id, null, "GET", true);
// };

// //notification services
// export const accountManagerNotiifcation = () => { 
//   return Api(ACCOUNT_MANAGER_NOTIFICATION, null, "GET", true);
// };

// export const managerNotiifcation = () => {
//   return Api(MANAGER_NOTIFICATION, null, "GET", true);
// };

// export const userNotiifcation = () => {
//   return Api(USER_NOTIFICATION, null, "GET", true);
// };

// // export const getAllReportsOfManager = (params) => {
// //   return Api(MANAGER_ALLREPORTS, params, "POST", true);
// // };

// export const signUpUser = (params) => {
//   return Api(
//     SIGNUP, //Path
//     params, //Params (Payload)
//     "POST", // Method
//     null //Token
//   );
// };

// export const signInUser = (params) => {
//   return Api(SIGNIN, params, "POST", null);
// };

// // export const signOutUser = (token) => {
// //   return Api(SIGNOUT, null, "GET", token);
// // };
// export const countExpRep = () => {
//   return Api(COUNT, null, "GET", true);
// };
