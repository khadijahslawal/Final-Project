import web3 from "./web3";
import PropertyFactory from "./build/PropertyFactory.json";

const instance = new web3.eth.Contract(
    PropertyFactory.abi,
   "0x82f8Fd2D36f2f00CE188146Cc6c7bDE460d63b1B"
  );
  
  export default instance;
