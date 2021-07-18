import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

import { PoolsProvider } from "./PoolsProvider";
import { AppSettingsProvider } from "./AppSettingsProvider";
import Pools from "./Pools";
import Account from "./Account";
import GlobalCurrencySelector from "./GlobalCurrencySelector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

function Container() {
  const { activate, active, account } = useWeb3React();

  useEffect(() => {
    activate(injected, (err) => console.error(err));
  }, [activate]);

  if (active) {
    return (
      <AppSettingsProvider>
        <PoolsProvider account={account}>
          <div className="lg:container mx-auto pb-4">
            <div className="w-full px-2 py-4 my-4 mb-4 flex justify-between">
              <h2 className="flex items-baseline text-3xl font-bold text-gray-600">
                <img
                  alt="Seedle logo - a seedling"
                  src="icon32.png"
                  className="mr-2"
                />
                <span>Seedle</span>
              </h2>
              <div className="w-52 flex justify-between">
                <GlobalCurrencySelector />
                <Account address={account} />
              </div>
            </div>
            <div>
              <div>
                <Pools />
              </div>
              <footer className="my-5 flex w-full justify-start">
                <div className="text-sm">
                  <a
                    className="text-blue-500"
                    href="https://twitter.com/seedlefinance"
                  >
                    Twitter
                  </a>{" "}
                  |{" "}
                  <a
                    className="text-blue-500"
                    href="https://github.com/laktek/uniswap-v3-pools"
                  >
                    GitHub
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </PoolsProvider>
      </AppSettingsProvider>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="flex flex-col items-center text-3xl font-bold text-gray-600 my-16">
        <img
          alt="Seedle logo - a seedling"
          src="icon128.png"
          className="my-4"
        />
        <div className="text-6xl text-gray-800 mb-4">Seedle</div>
        <div className="text-2xl text-gray-400">Uniswap V3 Pool Manager</div>
      </h2>

      <div className="text-center text-xl text-gray-600">
        Connect with Metamask to use the app.
      </div>
      <footer className="my-5 flex justify-start">
        <div className="text-sm">
          <a className="text-blue-500" href="https://twitter.com/seedlefinance">
            Twitter
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            href="https://github.com/laktek/uniswap-v3-pools"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Container;
