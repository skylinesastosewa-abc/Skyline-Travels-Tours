export const logoutAdmin = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("staffToken");
  window.location.href = "/";
};
