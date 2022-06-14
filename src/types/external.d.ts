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
}
