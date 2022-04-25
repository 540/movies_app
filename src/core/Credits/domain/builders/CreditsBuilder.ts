import { Credits, Department, Member } from 'core/Credits/domain/Credits'

export const aCredits = (cast = aMemberCollection(), crew = aMemberCollection(4, Department.Crew)) => {
  const _default: Credits = {
    id: 1,
    cast,
    crew
  }

  return _default
}

export const aMember = (options?: Partial<Member>): Member => {
  const _default: Member = {
    id: 1,
    department: Department.Acting,
    adult: true,
    name: 'name',
    job: 'job',
    profilePath: 'profilePath',
    character: 'character',
    order: 1,
    castId: 1,
    creditId: 'creditId',
    gender: 1,
    knownForDepartment: Department.Acting,
    originalName: 'originalName',
    popularity: 1
  }

  return Object.assign({}, _default, options)
}

export const aMemberCollection = (size = 4, department: Department = Department.Acting): Member[] => {
  const memberCollection = []

  for (let i = 0; i < size; i++) {
    memberCollection.push(aMember({ department: department, knownForDepartment: department }))
  }

  return memberCollection
}
