RegisterCommand('skydive', () => {
    const player = PlayerId(-1);
    const ped = GetPlayerPed(-1);
    const pedL = GetEntityCoords(ped);
    const pedHeading = GetEntityHeading(ped);
    StartPlayerTeleport(player, pedL[0], pedL[1], 1400, pedHeading, false, true, true);
    setTimeout(() => {
        TaskSkyDive(ped);
    }, 500)
})