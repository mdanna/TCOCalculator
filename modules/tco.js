const tco = {
  calculate({numApps, numUsers, numSimple, numModerate, numComplex}){
    let costMXGoYear1 = 99000;
    let costCompetitorYear1 = 199000;
    let costMXGoYear3 = 212000;
    let costCompetitorYear3 = 300000;
    let costMXGoYear5 = 315000;
    let costCompetitorYear5 = 500000;
    
    //implement the algorythm
    
    return {
      costMXGoYear1, costCompetitorYear1, 
      costMXGoYear3, costCompetitorYear3, 
      costMXGoYear5, costCompetitorYear5
    };
  }
};