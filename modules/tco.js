const tco = {
  labSvcsSimpleAppCost: 120000,
  labSvcsModerateAppCost: 160000,
  labSvcsComplexAppCost: 200000,
  
  mxGoEaseUse: 1,
  mendixEaseUse: 1,
  outSystemsEaseUse: 1,
  powerAppsEaseUse: 1,

  mxGoPuPm: 4.13,
  dominoCCBPuPm: 3.28,
  mendixPuPm: 12.00,
  outSystemsPuPm: 36,
  powerAppsPuPm: 8.00, 
  
  mxGoSavingsOnSvcsCost: 0.59,

  
  calculate({numApps, numUsers, numSimple, numModerate, numComplex}){

    //implement the algorythm

    //calc the services cost # apps * lab services rate
    const simpleM = numSimple * tco.labSvcsSimpleAppCost * 0.000001;
    const moderateM = numModerate * tco.labSvcsModerateAppCost * 0.000001;
    const complexM = numComplex * tco.labSvcsComplexAppCost * 0.000001;

    const totalM = simpleM + moderateM + complexM;

    const mxGoSvcs = tco.mxGoEaseUse * totalM;
    const mendixSvcs = tco.mendixEaseUse * totalM;
    const outSystemsSvcs = tco.outSystemsEaseUse * totalM;
    const powerAppsSvcs = tco.powerAppsEaseUse * totalM;

    // Calc the license costs in K$

    const mxGoLicM = ((numUsers * tco.mxGoPuPm) * 12) * 0.000001;
    const dominoCCBLicM = ((numUsers * tco.dominoCCBPuPm) * 12) * 0.000001;
    const mendixLicM = ((numUsers * tco.mendixPuPm) * 12) * 0.000001;
    const outSystemsLicM = ((numUsers * tco.outSystemsPuPm) * 12) * 0.000001;
    const powerAppsLicM = ((numUsers * tco.powerAppsPuPm) * 12) * 0.000001;

    const mendixTotLicM = mendixLicM + dominoCCBLicM;
    const outSystemsTotLicM = outSystemsLicM + dominoCCBLicM;
    const powerAppsTotLicM = powerAppsLicM + dominoCCBLicM;

    // 1Yr Project Costs in K$

    const costMXGoYear1 = ((1 - tco.mxGoSavingsOnSvcsCost) * mxGoSvcs) + mxGoLicM * 100;
    const mendixProjectCost = mendixTotLicM * 100 + mendixSvcs;
    const outSystemsProjectCost = outSystemsTotLicM * 100 + outSystemsSvcs;
    const powerAppsProjectCost = powerAppsTotLicM * 100 + powerAppsSvcs;
    const costCompetitorYear1 = (mendixProjectCost + outSystemsProjectCost + powerAppsProjectCost) / 3;

    // 3yr Project Cost vs LCAP competitors in K$

    const costMXGoYear3 = (2 * mxGoLicM) + costMXGoYear1;
    const mendix3yr = (2 * mendixTotLicM) + mendixProjectCost;
    const outSystems3yr = (2 * outSystemsTotLicM) + outSystemsProjectCost;
    const powerApps3yr = (2 * powerAppsTotLicM) + powerAppsProjectCost;
    const costCompetitorYear3 = (mendix3yr + outSystems3yr + powerApps3yr) / 3;

    // 5yr Project Cost vs LCAP competitors inK$

    const costMXGoYear5 =  (4 * mxGoLicM) + costMXGoYear1;
    const mendix5yr = (4 * mendixTotLicM) + mendixProjectCost;
    const outSystems5yr = (4 * outSystemsTotLicM) + outSystemsProjectCost;
    const powerApps5yr = (4 * powerAppsTotLicM) + powerAppsProjectCost;
    const costCompetitorYear5 = (mendix5yr + outSystems5yr + powerApps5yr) / 3;

    return {
      costMXGoYear1, costCompetitorYear1, 
      costMXGoYear3, costCompetitorYear3, 
      costMXGoYear5, costCompetitorYear5
    };
  }
};