declare namespace external {
  type Indicator = {
    numUsers: number;
    counter: number;
  };

  namespace kintone {
    type SummaryItem = {
      unixTime: number;
      numUsers: number;
      counter: number;
    };

    type Summary = Record<string, SummaryItem>;
  }

  namespace jsdelivr {
    type Stats = {
      rank: number;
      typeRank: number;
      total: number;
      versions: any;
      commits: any;
      branches: any;
    };
  }
}
