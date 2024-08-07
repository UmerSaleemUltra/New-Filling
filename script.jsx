const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    sidebar.classList.toggle('sidebar-open');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-active');
    sidebar.classList.remove('sidebar-open');
});