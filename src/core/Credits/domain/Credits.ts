export interface Credits {
  id: number
  cast: Member[]
  crew: Member[]
}

export interface Member {
  adult: boolean
  gender: number
  id: number
  knownForDepartment: Department
  name: string
  originalName: string
  popularity: number
  profilePath: null | string
  castId?: number
  character?: string
  creditId: string
  order?: number
  department?: Department
  job?: string
}

export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'Costume & Make-Up',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing'
}
