import { useState, useEffect, createContext, useContext } from 'react';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      const provider = new WalletConnectProvider({
        infuraId: "YOUR_INFURA_ID",
      });
      await provider.enable();
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const account = await signer.getAddress();
      setProvider(ethersProvider);
      setAccount(account);
    };

    connectWallet();
  }, []);

  return (
    <AuthContext.Provider value={{ provider, account }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);