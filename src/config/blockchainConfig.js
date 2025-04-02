import "dotenv/config";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_API_URL);

export default provider;