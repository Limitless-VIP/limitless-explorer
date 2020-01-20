/**
 * Global configuration object.
 */
const config = {
  api: {
    'host': 'https://explorer.limitlessvip.co.za',
    'port': '3000',
    'portWorker': '443',
    'prefix': '/api',
    'timeout': '5s'
  },

  /**
   * Specify the RPC-API of the coin daemon. The following options are available:
   *
   * modern (default)
   * - getmasternodecount, listmasternodes, getbudgetinfo and getmasternodecount
   *
   * legacy
   * - masternode, masternodelist, mnbudget
   */
  rpcApi: 'modern',

  /**
   * If set to true there are extra logging details in cron scripts.
   */
  verboseCron: true,

  /**
   * If set to true there are extra tx logging details in cron scripts (Not recommended).
   */
  verboseCronTx: false,

  /**
   * If set to 0, cpu cores are detected and worker processes spawned accordingly.
   * If set to > 0, limit the number of worker processes.
   */
  workers: 0,

  /**
   * Configure your coin details here.
   */
  coinDetails: {
    name: 'Limitless VIP',
    shortName: 'VIP',
    coinNumberFormat: '0,0.0000',
    coinNumberFormatFinance: '+0,0.0000'
  },

  /**
   * Set to true to extract PoS & MN data.
   */
  splitRewardsData: true,

  /**
   * API configurations.
   */
  freegeoip: {
    'api': 'https://extreme-ip-lookup.com/json/'
  },

  /**
   * API markets.
   */
  coinMarketCap: {
    'api': 'https://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'vip'
  },
  coinGecko: {
    'api': 'https://api.coingecko.com/api/v3/coins/',
    'ticker': 'tittiecoin'
  },

  /**
   * Specify the market API provider (coinMarketCap and coinGecko are supported).
   */
  apiProvider: 'CoinGecko',

  /**
   * All links to website and social media.
   */
  socialMedia: [
    {
      'title': 'Website',
      'link': 'https://limitlessvip.co.za',
      'icon': 'fas-home'
    },
    {
      'title': 'Discord',
      'link': 'https://discord.gg/wtz6QYX',
      'icon': 'fab-discord'
    },
    {
      'title': 'Telegram',
      'link': 'https://t.me/joinchat/AAAAAEm6COqwOoNWBS8GSQ',
      'icon': 'fab-telegram'
    },
    {
      'title': 'Twitter',
      'link': 'https://twitter.com/LimitlessVIP_',
      'icon': 'fab-twitter'
    },
    {
      'title': 'BitcoinTalk',
      'link': 'https://bitcointalk.org/index.php?topic=437695',
      'icon': 'fab-bitcoin'
    },
    {
      'title': 'Facebook',
      'link': 'https://www.facebook.com/limitlessvip.co.za/',
      'icon': 'fab-facebook'
    },
    {
      'title': 'YouTube',
      'link': 'https://www.youtube.com/channel/UC_RUvSj5WWz9u1cXiwmzwuQ',
      'icon': 'fab-youtube'
    },
    {
      'title': 'Github',
      'link': 'https://github.com/Limitless-VIP',
      'icon': 'fab-github'
    },
    {
      'title': 'Instagram',
      'link': 'https://www.instagram.com/limitlessvip.co.za/',
      'icon': 'fab-instagram'
    },
    {
      'title': 'Reddit',
      'link': 'https://www.reddit.com/r/tittiecoin/',
      'icon': 'fab-reddit'
    }
  ],

  /**
   * All exchange links.
   */
  exchanges: [
    {
      'title': 'Crex24',
      'link': 'https://crex24.com/exchange/VIP-BTC'
    },
    {
      'title': 'FINEXBOX',
      'link': 'https://www.finexbox.com/market/pair/VIP-BTC'
    }
  ],

  /**
   * Adjustable PoS Profitability Score - How profitable is your staking, tailored for your blockchain.
   */
  profitabilityScore: {

    /**
     * Figure out how profitable you are staking. Each output is multiplied by the number below, you can configure it for your blockchain.
     * The formula is: (reward.stake.input.confirmations / ((reward.stake.reward / reward.stake.input.value) * 100)) * config.profitabilityScore.weightMultiplier
     */
    weightMultiplier: 0.1,

    /**
     * In order to get the color below (from scoreStyles) we'll use an exponential formula.
     * The formula is: profitabilityScore < weightColorScale * Math.pow(2, i + 1) 
     */
    weightColorScale: 30,

    scoreStyles: [

      /**
       * Best case.
       */
      {
        color: "#f5a791",
        title: "Rank 1/10 - Excellent!!!"
      },
      {
        color: "#f49e87",
        title: "Rank 2/10 - Excellent!"
      },
      {
        color: "#f3957d",
        title: "Rank 3/10 - Excellent"
      },
      {
        color: "#f18c73",
        title: "Rank 4/10 - Very Good"
      },
      {
        color: "#f08269",
        title: "Rank 5/10 - Above Average"
      },
      {
        color: "#ef795f",
        title: "Rank 6/10 - Average"
      },
      {
        color: "#ee6f56",
        title: "Rank 7/10 - Below Average"
      },
      {
        color: "#ec654e",
        title: "Rank 8/10 - Not Optimal"
      },
      {
        color: "#eb5a46",
        title: "Rank 9/10 - Not Optimal!"
      },

      /**
       * Worst case (default).
       */
      {
        color: "#ea4f3d",
        title: "Rank 10/10 - Not Optimal!!!"
      }
    ]
  },

  /**
   * Community and address related. If you comment out all of these addresses the 'Community Addresses' section will not show up on the homepage. You can add as many addresses to highlight as you wish.
   */
  community: {
    highlightedAddresses: [
    ]
  },

  /**
   * Each address can contain it's own set of widgets and configs for those widgets.
   */
  addressWidgets: {
    'XXXXXXXXXXXXXXXXXXXXXXXXXXX': {

      /**
       * WIDGET: Adds a list of masternodes when viewing address. We use this to show community-ran masternodes.
       */
      masternodesAddressWidget: {
        title: 'Community Masternodes',
        description: 'Profits from these masternodes fund & fuel community talent',

        /**
         * If you have more than 10 you should enable this.
         */
        isPaginationEnabled: false,
        addresses: [
          'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
          'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
          'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
        ]
      }
    }
  }
};

module.exports = config;
