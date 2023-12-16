<script>
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Boxicons CSS -->
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <title>Dashboard</title>
</svelte:head>

<nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
>
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
                <button
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span class="sr-only">Open sidebar</span>
                    <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>
                <a href="https://rinn.in" class="flex ms-2 md:me-24">
                    <span
                        class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
                        >Rinn.In</span
                    >
                </a>
            </div>
            <div class="flex items-center">
                <div class="flex items-center ms-3">
                    <div>
                        <button
                            type="button"
                            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown-user"
                        >
                            <span class="sr-only">Open user menu</span>
                            <img
                                class="w-8 h-8 rounded-full"
                                src="/images/profile.jpg"
                                alt="user"
                            />
                        </button>
                    </div>
                    <div
                        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="dropdown-user"
                    >
                        <div class="px-6 py-5" role="none">
                            <p
                                class="text-sm text-gray-900 dark:text-white"
                                role="none"
                            >
                                Anshul Singh
                            </p>
                            <p
                                class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                role="none"
                            >
                                anshul@gamil.com
                            </p>
                        </div>
                        <ul class="py-1" role="none">
                            <li>
                                <a
                                    href="/"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">Dashboard</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">Settings</a
                                >
                            </li>

                            <li>
                                <form
                                    class=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    action="/logout"
                                    method="post"
                                >
                                    <button type="submit" value="Sign out"
                                        >Sign out</button
                                    >
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

<aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
>
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
            <li class="nav_link submenu_item">
                <a href="/" class="nav_link submenu_item">
                    <span class="navlink_icon">
                        <i class="bx bx-home-alt"></i>
                    </span>
                    <span class="navlink">Home</span>
                  </a>

            </li>
            
        </ul>

        <ul class="menu_items">
            <div class="menu_title menu_editor"></div>
            <!-- duplicate these li tag if you want to add or remove navlink only -->
            <!-- Start -->
            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class='bx bx-group'></i> 
                    </span>
                    <span class="navlink">Your Leads</span>
                </a>
            </li>
            <!-- End -->

            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class="bx bx-user-circle"></i>
                    </span>
                    <span class="navlink">Active Leads </span>
                </a>
            </li>
            <li class="nav_link submenu_item">
                <a href="/newLead" class="nav_link">
                    <span class="navlink_icon">
                        <i class='bx bx-link-alt'></i>
                    </span>
                    <span class="navlink">New Lead</span>
                </a>
            </li>
        </ul>
        <ul class="menu_items">
            <div class="menu_title menu_editor"></div>
            <!-- duplicate these li tag if you want to add or remove navlink only -->
            <!-- Start -->
            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class='bx bx-rupee'></i>
                    </span>
                    <span class="navlink">Payouts</span>
                </a>
            </li>
            <!-- End -->

            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class='bx bx-book'></i>
                    </span>
                    <span class="navlink">Passbook</span>
                </a>
            </li>
            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class='bx bxs-bank'></i>
                    </span>
                    <span class="navlink">Manage Bank </span>
                </a>
            </li>
        </ul>
        <ul class="menu_items">
            <div class="menu_title menu_setting"></div>
            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class='bx bxs-user-account'></i>
                    </span>
                    <span class="navlink">Profile</span>
                </a>
            </li>
            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class="bx bx-cog "></i>
                    </span>
                    <span class="navlink">Profile Setting</span>
                </a>
            </li>
            
            
        </ul>
        <ul class="menu_items">
            <div class="menu_title menu_company"></div>
            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class="bx bx-flag"></i>
                    </span>
                    <span class="navlink">Blog</span>
                </a>
            </li>
            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class='bx bx-question-mark'></i>
                    </span>
                    <span class="navlink">FAQ</span>
                </a>
            </li>
            <li class="nav_link submenu_item">
                <a href="#" class="nav_link">
                    <span class="navlink_icon">
                        <i class='bx bxs-file'></i>
                    </span>
                    <span class="navlink">Terms & Conditions</span>
                </a>
            </li>
           
        </ul>
    </div>
</aside>
<style>
    /* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
 
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
:root {
  --white-color: #fff;
  --blue-color: #4070f4;
  --grey-color: #707070;
  --grey-color-light: #aaa;
}
body {
  background-color: #e7f2fd;
  transition: all 0.5s ease;
}
body.dark {
  background-color: #333;
}
body.dark {
  --white-color: #333;
  --blue-color: #fff;
  --grey-color: #f2f2f2;
  --grey-color-light: #aaa;
}

/* navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  background-color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  z-index: 1000;
  box-shadow: 0 0 2px var(--grey-color-light);
}
.logo_item {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 22px;
  font-weight: 500;
  color: var(--blue-color);
}
.navbar img {
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
}
.search_bar {
  height: 47px;
  max-width: 430px;
  width: 100%;
}
.search_bar input {
  height: 100%;
  width: 100%;
  border-radius: 25px;
  font-size: 18px;
  outline: none;
  background-color: var(--white-color);
  color: var(--grey-color);
  border: 1px solid var(--grey-color-light);
  padding: 0 20px;
}
.navbar_content {
  display: flex;
  align-items: center;
  column-gap: 25px;
}
.navbar_content i {
  cursor: pointer;
  font-size: 20px;
  color: var(--grey-color);
}

/* sidebar */
.sidebar {
  background-color: var(--white-color);
  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 80px 20px;
  z-index: 100;
  overflow-y: scroll;
  box-shadow: 0 0 1px var(--grey-color-light);
  transition: all 0.5s ease;
}
.sidebar.close {
  padding: 60px 0;
  width: 80px;
}
.sidebar::-webkit-scrollbar {
  display: none;
}
.menu_content {
  position: relative;
}
.menu_title {
  margin: 15px 0;
  padding: 0 20px;
  font-size: 18px;
}
.sidebar.close .menu_title {
  padding: 6px 30px;
}
.menu_title::before {
  color: var(--grey-color);
  white-space: nowrap;
}
.menu_dahsboard::before {
  content: "Dashboard";
}
.menu_editor::before {
  content: "Loans";
}
.menu_setting::before {
  content: "Profile";
}
.menu_company::before {
  content: "Company";
}
.sidebar.close .menu_title::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 18px;
  border-radius: 12px;
  background: var(--grey-color-light);
}
.menu_items {
  padding: 0;
  list-style: none;
}
.navlink_icon {
  position: relative;
  font-size: 22px;
  min-width: 50px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 6px;
}
.navlink_icon::before {
  content: "";
  position: absolute;
  height: 100%;
  width: calc(100% + 100px);
  left: -20px;
}
.navlink_icon:hover {
  background: var(--blue-color);
}
.sidebar .nav_link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 15px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--grey-color);
  white-space: nowrap;
}
.sidebar.close .navlink {
  display: none;
}
.nav_link:hover {
  color: var(--white-color);
  background: var(--blue-color);
  border-radius: 10px;
}
.sidebar.close .nav_link:hover {
  background: var(--white-color);
}
.submenu_item {
  cursor: pointer;
}
.submenu {
  display: none;
}
.submenu_item .arrow-left {
  position: absolute;
  right: 10px;
  display: inline-block;
  margin-right: auto;
}
.sidebar.close .submenu {
  display: none;
}
.show_submenu ~ .submenu {
  display: block;
}
.show_submenu .arrow-left {
  transform: rotate(90deg);
}
.submenu .sublink {
  padding: 15px 15px 15px 52px;
}
.bottom_content {
  position: fixed;
  bottom: 60px;
  left: 0;
  width: 260px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.bottom {
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  justify-content: space-around;
  padding: 18px 0;
  text-align: center;
  width: 100%;
  color: var(--grey-color);
  border-top: 1px solid var(--grey-color-light);
  background-color: var(--white-color);
}
.bottom i {
  font-size: 20px;
}
.bottom span {
  font-size: 18px;
}
.sidebar.close .bottom_content {
  width: 50px;
  left: 15px;
}
.sidebar.close .bottom span {
  display: none;
}
.sidebar.hoverable .collapse_sidebar {
  display: none;
}
#sidebarOpen {
  display: none;
}
@media screen and (max-width: 768px) {
  #sidebarOpen {
    font-size: 25px;
    display: block;
    margin-right: 10px;
    cursor: pointer;
    color: var(--grey-color);
  }
  .sidebar.close {
    left: -100%;
  }
  .search_bar {
    display: none;
  }
  .sidebar.close .bottom_content {
    left: -100%;
  }
}

</style>