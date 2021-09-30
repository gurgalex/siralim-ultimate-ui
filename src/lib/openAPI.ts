/**
 * This file was auto-generated by openapi-to-ts. Do not change it manually!
 */

export interface CreatureArrayStrFilterSchema {
  field: CreatureArrayStrFilterEnum;
  comparator: ArrayFilterComparators;
  value?: Partial<string> & Partial<number>;
}

export interface CreatureFiltersSchema {
  filters: Array<
    | CreatureIntFilterSchema
    | CreatureStrFilterSchema
    | CreatureArrayStrFilterSchema
  >;
}

export interface CreatureIntFilterSchema {
  field: CreatureIntFilterEnum;
  comparator: NumericFilterComparators;
  value?: Partial<number> & Partial<number>;
}

export interface CreatureModel {
  id: number;
  name: string;
  slug: string;
  description?: string;
  battle_sprite: string;
  health: number;
  attack: number;
  intelligence: number;
  defense: number;
  speed: number;
  klass: KlassModel;
  race: RaceModel;
  sources: Array<SourceModel>;
  trait: TraitModel;
  created_at: string;
  updated_at: string;
}

export interface CreatureSortingRequestSchema {
  by?: CreatureSortingEnum;
  direction?: SortDirections;
}

export interface CreatureSortingResponseSchema {
  by: CreatureSortingEnum;
  direction: SortDirections;
}

export interface CreatureStrFilterSchema {
  field: CreatureStrFilterEnum;
  comparator: StringFilterComparators;
  value?: string;
}

export interface CreaturesGetSchema {
  data: CreatureModel;
}

export interface CreaturesIndexSchema {
  data: Array<CreatureModel>;
  pagination: PaginationResponseSchema;
  sorting: CreatureSortingResponseSchema;
}

export interface CreaturesSearchRequest {
  filter: CreatureFiltersSchema;
  pagination?: PaginationRequestSchema;
  sorting?: CreatureSortingRequestSchema;
}

export interface CreaturesSearchSchema {
  data: Array<CreatureModel>;
  filter: CreatureFiltersSchema;
  pagination: PaginationResponseSchema;
  sorting: CreatureSortingResponseSchema;
}

export interface HTTPValidationError {
  detail?: Array<ValidationError>;
}

export interface HealthCheckSchema {
  healthcheck: boolean;
}

export interface KlassFiltersSchema {
  filters: Array<KlassIntFilterSchema | KlassStrFilterSchema>;
}

export interface KlassIntFilterSchema {
  field: KlassIntFilterEnum;
  comparator: NumericFilterComparators;
  value?: Partial<number> & Partial<number>;
}

export interface KlassModel {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface KlassSortingRequestSchema {
  by?: KlassSortingEnum;
  direction?: SortDirections;
}

export interface KlassSortingResponseSchema {
  by: KlassSortingEnum;
  direction: SortDirections;
}

export interface KlassStrFilterSchema {
  field: KlassStrFilterEnum;
  comparator: StringFilterComparators;
  value?: string;
}

export interface KlassesGetSchema {
  data: KlassModel;
}

export interface KlassesIndexSchema {
  data: Array<KlassModel>;
  pagination: PaginationResponseSchema;
  sorting: KlassSortingResponseSchema;
}

export interface KlassesSearchRequest {
  filter: KlassFiltersSchema;
  pagination?: PaginationRequestSchema;
  sorting?: KlassSortingRequestSchema;
}

export interface KlassesSearchSchema {
  data: Array<KlassModel>;
  filter: KlassFiltersSchema;
  pagination: PaginationResponseSchema;
  sorting: KlassSortingResponseSchema;
}

export interface PaginationRequestSchema {
  page?: number;
  size?: number;
}

export interface PaginationResponseSchema {
  page: number;
  size: number;
  count: number;
}

export interface RaceFiltersSchema {
  filters: Array<RaceIntFilterSchema | RaceStrFilterSchema>;
}

export interface RaceIntFilterSchema {
  field: RaceIntFilterEnum;
  comparator: NumericFilterComparators;
  value?: Partial<number> & Partial<number>;
}

export interface RaceModel {
  id: number;
  name: string;
  slug: string;
  description?: string;
  icon: string;
  default_klass: KlassModel;
  created_at: string;
  updated_at: string;
}

export interface RaceSortingRequestSchema {
  by?: RaceSortingEnum;
  direction?: SortDirections;
}

export interface RaceSortingResponseSchema {
  by: RaceSortingEnum;
  direction: SortDirections;
}

export interface RaceStrFilterSchema {
  field: RaceStrFilterEnum;
  comparator: StringFilterComparators;
  value?: string;
}

export interface RacesGetSchema {
  data: RaceModel;
}

export interface RacesIndexSchema {
  data: Array<RaceModel>;
  pagination: PaginationResponseSchema;
  sorting: RaceSortingResponseSchema;
}

export interface RacesSearchRequest {
  filter: RaceFiltersSchema;
  pagination?: PaginationRequestSchema;
  sorting?: RaceSortingRequestSchema;
}

export interface RacesSearchSchema {
  data: Array<RaceModel>;
  filter: RaceFiltersSchema;
  pagination: PaginationResponseSchema;
  sorting: RaceSortingResponseSchema;
}

export interface RootSchema {
  data: HealthCheckSchema;
}

export interface SourceFiltersSchema {
  filters: Array<SourceIntFilterSchema | SourceStrFilterSchema>;
}

export interface SourceIntFilterSchema {
  field: SourceIntFilterEnum;
  comparator: NumericFilterComparators;
  value?: Partial<number> & Partial<number>;
}

export interface SourceModel {
  id: number;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface SourceSortingRequestSchema {
  by?: SourceSortingEnum;
  direction?: SortDirections;
}

export interface SourceSortingResponseSchema {
  by: SourceSortingEnum;
  direction: SortDirections;
}

export interface SourceStrFilterSchema {
  field: SourceStrFilterEnum;
  comparator: StringFilterComparators;
  value?: string;
}

export interface SourcesGetSchema {
  data: SourceModel;
}

export interface SourcesIndexSchema {
  data: Array<SourceModel>;
  pagination: PaginationResponseSchema;
  sorting: SourceSortingResponseSchema;
}

export interface SourcesSearchRequest {
  filter: SourceFiltersSchema;
  pagination?: PaginationRequestSchema;
  sorting?: SourceSortingRequestSchema;
}

export interface SourcesSearchSchema {
  data: Array<SourceModel>;
  filter: SourceFiltersSchema;
  pagination: PaginationResponseSchema;
  sorting: SourceSortingResponseSchema;
}

export interface SpellArrayStrFilterSchema {
  field: SpellArrayStrFilterEnum;
  comparator: ArrayFilterComparators;
  value?: Partial<string> & Partial<number>;
}

export interface SpellFiltersSchema {
  filters: Array<
    SpellIntFilterSchema | SpellStrFilterSchema | SpellArrayStrFilterSchema
  >;
}

export interface SpellIntFilterSchema {
  field: SpellIntFilterEnum;
  comparator: NumericFilterComparators;
  value?: Partial<number> & Partial<number>;
}

export interface SpellModel {
  id: number;
  name: string;
  slug: string;
  description?: string;
  charges: number;
  klass: KlassModel;
  source: SourceModel;
  tags: Array<string>;
  created_at: string;
  updated_at: string;
}

export interface SpellSortingRequestSchema {
  by?: SpellSortingEnum;
  direction?: SortDirections;
}

export interface SpellSortingResponseSchema {
  by: SpellSortingEnum;
  direction: SortDirections;
}

export interface SpellStrFilterSchema {
  field: SpellStrFilterEnum;
  comparator: StringFilterComparators;
  value?: string;
}

export interface SpellsGetSchema {
  data: SpellModel;
}

export interface SpellsIndexSchema {
  data: Array<SpellModel>;
  pagination: PaginationResponseSchema;
  sorting: SpellSortingResponseSchema;
}

export interface SpellsSearchRequest {
  filter: SpellFiltersSchema;
  pagination?: PaginationRequestSchema;
  sorting?: SpellSortingRequestSchema;
}

export interface SpellsSearchSchema {
  data: Array<SpellModel>;
  filter: SpellFiltersSchema;
  pagination: PaginationResponseSchema;
  sorting: SpellSortingResponseSchema;
}

export interface StatusEffectFiltersSchema {
  filters: Array<StatusEffectIntFilterSchema | StatusEffectStrFilterSchema>;
}

export interface StatusEffectIntFilterSchema {
  field: StatusEffectIntFilterEnum;
  comparator: NumericFilterComparators;
  value?: Partial<number> & Partial<number>;
}

export interface StatusEffectModel {
  id: number;
  name: string;
  slug: string;
  description?: string;
  category: StatusEffectCategoriesEnum;
  icon: string;
  turns?: number;
  leave_chance?: number;
  max_stacks: number;
  created_at: string;
  updated_at: string;
}

export interface StatusEffectStrFilterSchema {
  field: StatusEffectStrFilterEnum;
  comparator: StringFilterComparators;
  value?: string;
}

export interface StatusEffectsGetSchema {
  data: StatusEffectModel;
}

export interface StatusEffectsIndexSchema {
  data: Array<StatusEffectModel>;
  pagination: PaginationResponseSchema;
  sorting: StatusEffetSortingResponseSchema;
}

export interface StatusEffectsSearchRequest {
  filter: StatusEffectFiltersSchema;
  pagination?: PaginationRequestSchema;
  sorting?: StatusEffetSortingRequestSchema;
}

export interface StatusEffectsSearchSchema {
  data: Array<StatusEffectModel>;
  filter: StatusEffectFiltersSchema;
  pagination: PaginationResponseSchema;
  sorting: StatusEffetSortingResponseSchema;
}

export interface StatusEffetSortingRequestSchema {
  by?: StatusEffetSortingEnum;
  direction?: SortDirections;
}

export interface StatusEffetSortingResponseSchema {
  by: StatusEffetSortingEnum;
  direction: SortDirections;
}

export interface TraitArrayStrFilterSchema {
  field: TraitArrayStrFilterEnum;
  comparator: ArrayFilterComparators;
  value?: Partial<string> & Partial<number>;
}

export interface TraitFiltersSchema {
  filters: Array<
    TraitIntFilterSchema | TraitStrFilterSchema | TraitArrayStrFilterSchema
  >;
}

export interface TraitIntFilterSchema {
  field: TraitIntFilterEnum;
  comparator: NumericFilterComparators;
  value?: Partial<number> & Partial<number>;
}

export interface TraitModel {
  id: number;
  name: string;
  slug: string;
  description?: string;
  material_name?: string;
  tags: Array<string>;
  created_at: string;
  updated_at: string;
}

export interface TraitSortingRequestSchema {
  by?: TraitSortingEnum;
  direction?: SortDirections;
}

export interface TraitSortingResponseSchema {
  by: TraitSortingEnum;
  direction: SortDirections;
}

export interface TraitStrFilterSchema {
  field: TraitStrFilterEnum;
  comparator: StringFilterComparators;
  value?: string;
}

export interface TraitsGetSchema {
  data: TraitModel;
}

export interface TraitsIndexSchema {
  data: Array<TraitModel>;
  pagination: PaginationResponseSchema;
  sorting: TraitSortingResponseSchema;
}

export interface TraitsSearchRequest {
  filter: TraitFiltersSchema;
  pagination?: PaginationRequestSchema;
  sorting?: TraitSortingRequestSchema;
}

export interface TraitsSearchSchema {
  data: Array<TraitModel>;
  filter: TraitFiltersSchema;
  pagination: PaginationResponseSchema;
  sorting: TraitSortingResponseSchema;
}

export interface ValidationError {
  loc: Array<string>;
  msg: string;
  type: string;
}

/**
 * An enumeration.
 */
export type ArrayFilterComparators =
  | "&&"
  | "@>"
  | "<@"
  | "=="
  | "!="
  | "is_null"
  | "is_not_null";

/**
 * An enumeration.
 */
export type CreatureArrayStrFilterEnum = "trait_tags";

/**
 * An enumeration.
 */
export type CreatureIntFilterEnum =
  | "id"
  | "health"
  | "attack"
  | "intelligence"
  | "defense"
  | "speed"
  | "klass_id"
  | "race_id"
  | "trait_id";

/**
 * An enumeration.
 */
export type CreatureSortingEnum =
  | "id"
  | "name"
  | "health"
  | "attack"
  | "intelligence"
  | "defense"
  | "speed"
  | "klass_id"
  | "klass_name"
  | "race_id"
  | "race_name"
  | "trait_id"
  | "trait_name"
  | "trait_tags"
  | "full_text";

/**
 * An enumeration.
 */
export type CreatureStrFilterEnum =
  | "name"
  | "klass_name"
  | "race_name"
  | "trait_name"
  | "full_text";

/**
 * An enumeration.
 */
export type KlassIntFilterEnum = "id";

/**
 * An enumeration.
 */
export type KlassSortingEnum = "id" | "name";

/**
 * An enumeration.
 */
export type KlassStrFilterEnum = "name";

/**
 * An enumeration.
 */
export type NumericFilterComparators =
  | "=="
  | "!="
  | ">"
  | ">="
  | "<"
  | "<="
  | "is_null"
  | "is_not_null";

/**
 * An enumeration.
 */
export type RaceIntFilterEnum = "id" | "default_klass_id";

/**
 * An enumeration.
 */
export type RaceSortingEnum =
  | "id"
  | "name"
  | "default_klass_id"
  | "default_klass_name"
  | "full_text";

/**
 * An enumeration.
 */
export type RaceStrFilterEnum = "name" | "default_klass_name" | "full_text";

/**
 * An enumeration.
 */
export type SortDirections = "asc" | "desc";

/**
 * An enumeration.
 */
export type SourceIntFilterEnum = "id";

/**
 * An enumeration.
 */
export type SourceSortingEnum = "id" | "name" | "full_text";

/**
 * An enumeration.
 */
export type SourceStrFilterEnum = "name" | "full_text";

/**
 * An enumeration.
 */
export type SpellArrayStrFilterEnum = "tags";

/**
 * An enumeration.
 */
export type SpellIntFilterEnum = "id" | "charges" | "klass_id" | "source_id";

/**
 * An enumeration.
 */
export type SpellSortingEnum =
  | "id"
  | "name"
  | "charges"
  | "klass_id"
  | "klass_name"
  | "source_id"
  | "source_name"
  | "tags"
  | "full_text";

/**
 * An enumeration.
 */
export type SpellStrFilterEnum =
  | "name"
  | "klass_name"
  | "source_name"
  | "full_text";

/**
 * An enumeration.
 */
export type StatusEffectCategoriesEnum = "buff" | "debuff" | "minion";

/**
 * An enumeration.
 */
export type StatusEffectIntFilterEnum = "id" | "leave_chance" | "max_stacks";

/**
 * An enumeration.
 */
export type StatusEffectStrFilterEnum =
  | "name"
  | "category"
  | "turns"
  | "full_text";

/**
 * An enumeration.
 */
export type StatusEffetSortingEnum =
  | "id"
  | "name"
  | "category"
  | "turns"
  | "leave_chance"
  | "max_stacks"
  | "full_text";

/**
 * An enumeration.
 */
export type StringFilterComparators =
  | "=="
  | "!="
  | "is_null"
  | "is_not_null"
  | "like"
  | "ilike";

/**
 * An enumeration.
 */
export type TraitArrayStrFilterEnum = "tags";

/**
 * An enumeration.
 */
export type TraitIntFilterEnum = "id";

/**
 * An enumeration.
 */
export type TraitSortingEnum =
  | "id"
  | "name"
  | "material_name"
  | "tags"
  | "full_text";

/**
 * An enumeration.
 */
export type TraitStrFilterEnum = "name" | "material_name" | "full_text";
