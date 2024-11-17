// Add this in a new file: types/global.d.ts
import { MetaMaskInpageProvider } from '@metamask/providers';

interface Window {
    ethereum?: MetaMaskInpageProvider;
  }