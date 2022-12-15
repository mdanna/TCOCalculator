const tco = {

  calculate({numApps, numUsers, numSimple, numModerate, numComplex}){

    //implement the algorythm
    const costMXGoSvcs = 49200 * numSimple + 65600 * numModerate + 82000 * numComplex;
    const costMXGoLic = 10.32 * 12 * numUsers;
    
    // Total MX Go Cost: 1 Year [A]
    const costMXGoYear1 = (costMXGoSvcs + costMXGoLic) / 10000;
    // Total MX Go Cost: 3 Year [F]
    const costMXGoYear3 = (costMXGoSvcs + costMXGoLic * 3) / 10000;
    // Total MX Go Cost: 5 Year [K]
    const costMXGoYear5 = (costMXGoSvcs + costMXGoLic * 5) / 10000;
    
    const costCompetitorSvcs = 120000 * numSimple + 160000 * numModerate + 200000 * numComplex;
    const costCompetitorLic = (8.60 + 18.67) * 12 * numUsers;
    
    // Total Competitor Cost: 1 Year [B]
    const costCompetitorYear1 = (costCompetitorSvcs + costCompetitorLic) / 10000;
    // Total Competitor Cost: 3 Year [G]
    const costCompetitorYear3 = (costCompetitorSvcs + costCompetitorLic * 3) / 10000;
    // Total Competitor Cost: 5 Year [L]
    const costCompetitorYear5 = (costCompetitorSvcs + costCompetitorLic * 5) / 10000;

    return {
      costMXGoYear1, costCompetitorYear1, 
      costMXGoYear3, costCompetitorYear3, 
      costMXGoYear5, costCompetitorYear5
    };
  }
};