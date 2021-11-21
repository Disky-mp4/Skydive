RegisterCommand('skydive', () => {
    const player = PlayerId(-1); // get player
    const ped = GetPlayerPed(-1); // get players ped
    const pedL = GetEntityCoords(ped); // get the coordinates of the player
    const pedHeading = GetEntityHeading(ped); // where the ped is heading (facing)
    StartPlayerTeleport(player, pedL[0], pedL[1], 1400, pedHeading, false, true, true); // teleport the player
    setTimeout(() => { // I've found that setting this too quickly won't work, so added a 500ms delay, seems to work fine
        TaskSkyDive(ped); // set the player into skydive, allows you to control where you fall instead of falling aimlessly
    }, 500)
})