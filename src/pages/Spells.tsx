import React, { useCallback, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

import {
  useQueryParams,
  StringParam,
  NumberParam,
  withDefault,
} from "use-query-params";
import { ISortAction } from "../lib/queryParams";

import SortedTableHeader from "../components/SortedTableHeader";
import TagsPills from "../components/TagsPills";
import { ISpellModel, ISpellsSearchSchema } from "../lib/openAPI";
import { buildSearch } from "../lib/search";

const queryParamsStructure = {
  page: withDefault(NumberParam, 0),
  size: withDefault(NumberParam, 25),
  sort_by: withDefault(StringParam, "name"),
  sort_direction: withDefault(StringParam, "asc"),
};

const fetchSpells = buildSearch<ISpellsSearchSchema>("spells");

export default function Spells() {
  const [spells, setSpells] = useState<ISpellModel[]>([]);
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useQueryParams(queryParamsStructure);

  useEffect(() => {
    fetchSpells(query).then(
      ({ data, pagination: { count } }: ISpellsSearchSchema) => {
        setSpells(data);
        setCount(count);
      }
    );
  }, [query]);

  const pageChange = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setQuery({ ...query, page: newPage });
    },
    [query]
  );

  const sizeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setQuery({ ...query, size: parseInt(event.target.value), page: 0 });
    },
    [query]
  );

  const reduceSort = useCallback(
    (sort: ISortAction) => {
      setQuery({ ...query, ...sort });
    },
    [query]
  );

  return (
    <TableContainer style={{ maxHeight: "100%" }} component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TablePagination
              count={count}
              page={query.page}
              onPageChange={pageChange}
              rowsPerPage={query.size}
              onRowsPerPageChange={sizeChange}
            />
          </TableRow>
          <TableRow>
            <SortedTableHeader
              align="left"
              field={"name"}
              name={"Name"}
              sort={query}
              reduceSort={reduceSort}
            />
            <SortedTableHeader
              align="center"
              field={"klass_name"}
              name={"Class"}
              sort={query}
              reduceSort={reduceSort}
            />
            <SortedTableHeader
              align="center"
              field={"charges"}
              name={"Charges"}
              sort={query}
              reduceSort={reduceSort}
            />
            <TableCell align="center">Source</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="right">Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spells.map((spell) => (
            <TableRow key={spell.id}>
              <TableCell>{spell.name}</TableCell>
              <TableCell align="center">
                <img
                  src={spell.klass.icon}
                  alt={`${spell.name} Klass Icon ${spell.klass.name}`}
                />
              </TableCell>
              <TableCell align="center">{spell.charges}</TableCell>
              <TableCell align="center">{spell.source.name}</TableCell>
              <TableCell align="center">{spell.description}</TableCell>
              <TableCell align="right">
                <TagsPills tags={spell.tags} justifyContent="flex-end" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}
              count={count}
              page={query.page}
              onPageChange={pageChange}
              rowsPerPage={query.size}
              onRowsPerPageChange={sizeChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
