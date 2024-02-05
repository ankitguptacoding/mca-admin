
import Swal2 from "sweetalert2";
import swal from "sweetalert";
import axios from "axios";
import { FaTh, FaUserAlt, FaRegChartBar } from "react-icons/fa";
const sideMenu = [
    {
      name: "Dashboard",
      icon: <FaTh/>,
      route: "/",
      active: true
    },
    {
      name: "About",
      icon:  <FaUserAlt/>,
      route: "/about",
      active: false
    },
    {
      name: "Analytics",
      icon: <FaRegChartBar/>,
      route: "/analytics",
      active: false
    },
  ];
  const sweetAlert = (msg, status, type) => {
    if (status) {
      Swal2.fire({
        position: "top-end",
        icon: "success",
        title: msg,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal2.fire({
          position: "top-end",
          icon: "error",
          title: msg,
          showConfirmButton: false,
          timer: 1500,
      });
    }
  };

  export { sideMenu, sweetAlert};