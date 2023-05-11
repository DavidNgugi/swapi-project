export interface PeopleState {
    currentPage: number;
}

export interface PaginationProps {
    count: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export interface PersonDetails {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string;
}

export interface HomeWorld {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
}

export interface PeopleResult {
    count: number;
    next: string;
    previous: string;
    results: PersonDetails[];
}

export interface GetPeopleQueryResult {
    count: number;
    people: PeopleResult;
}