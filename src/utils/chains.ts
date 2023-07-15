export function getChainNameAndColor(chainId: number) {
  const chains: { [id: number]: string[] } = {
    1: ['Mainnet', 'bg-gray-200 text-black', 'ethereum'],
    10: ['Optimism', 'bg-red-200 text-red-700', 'optimism'],
    42161: ['Arbitrum', 'bg-blue-200 text-blue-700', 'arbitrum'],
    137: ['Polygon', 'bg-indigo-300 text-indigo-600', 'polygon'],
    9001: ['Evmos', 'bg-orange-300 text-orange-600', 'evmos'],

  };

  return chains[chainId] || chains[1];
}
