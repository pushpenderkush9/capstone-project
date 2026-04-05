// Mock database for frontend testing
let teamsDB = []

// Create Team (mock API)
export const createTeam = async (teamData) => {

  console.log("Mock API received:", teamData)

  await new Promise((resolve) => setTimeout(resolve, 300))

  const newTeam = {
    id: Date.now(),
    ...teamData,
    createdAt: new Date()
  }

  teamsDB.push(newTeam)

  return {
    success: true,
    data: newTeam
  }

}

// Get all teams
export const getTeams = async () => {

  await new Promise((resolve) => setTimeout(resolve, 200))

  return {
    success: true,
    data: teamsDB
  }

}


/*
-------------------------------------
FUTURE BACKEND (SPRING BOOT)
-------------------------------------

import axios from "axios"

export const createTeam = async (teamData) => {

  const response = await axios.post(
    "http://localhost:8080/api/teams",
    teamData
  )

  return response.data

}

export const getTeams = async () => {

  const response = await axios.get(
    "http://localhost:8080/api/teams"
  )

  return response.data

}
*/