import { useState, useEffect, createContext, useContext } from 'react';
import { Web3Provider } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

interface AuthContextType {
  provider: Web3Provider | null;
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [provider, setProvider] = useState<WalletConnectProvider | null>(null);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      const provider = new WalletConnectProvider({
        infuraId: "YOUR_INFURA_ID",
      });
      await provider.enable();
      const ethersProvider = new Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const account = await signer.getAddress();
      setProvider(ethersProvider);
      setAccount(account);
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  const disconnectWallet = () => {
    if (provider) {
      provider.disconnect();
      setProvider(null);
      setAccount(null);
    }
  };

  return (
    <AuthContext.Provider value={{ provider, account, connectWallet, disconnectWallet }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);