export const TODO_FILTERS ={
    ALL:'all',
    ACTIVE:'active',
    COMPLETED:'completed',
    PARTIAL: 'partial'
} as const 
// *** as const es de TS, valores no modificables  ***  readonly
export const FILTER_BUTTONS ={
    [TODO_FILTERS.ALL]:{
        literal: 'Todos',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]:{
        literal: 'Activos',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]:{
        literal: 'Completados',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const
