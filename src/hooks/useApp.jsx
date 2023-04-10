
import { useContext } from "react";

import AppContext from "../context/AppContex";

const useApp = () => useContext(AppContext)

export default useApp;