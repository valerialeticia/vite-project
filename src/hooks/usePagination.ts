import { useState, useEffect } from 'react'
import { Rows } from "../types/table"

type RangeProps = {
  rows: Rows[];
  rowsPerPage: number
}

type SliceDataProps = {
  rows: Rows[];
  page: number;
  rowsPerPage: number
}

const calculateRange = ({ rows, rowsPerPage } : RangeProps) => Math.ceil(rows.length / rowsPerPage)

const sliceData = ({ rows, page, rowsPerPage } : SliceDataProps) => {
  const startIndex = (page - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  return rows.slice(startIndex, endIndex)
}

export const usePagination = ({ rows, page, rowsPerPage } : SliceDataProps) => {
  const [tableRange, setTableRange] = useState(1)
  const [currentRows, setCurrentRows] = useState<Rows[]>([])

  useEffect(() => {
    const range = calculateRange({ rows, rowsPerPage })
    setTableRange(range)

    const currentRows = sliceData({ rows, page, rowsPerPage })
    setCurrentRows([...currentRows])
  }, [rows, setTableRange, rowsPerPage, page, setCurrentRows])

  return { currentRows, range: tableRange }
}