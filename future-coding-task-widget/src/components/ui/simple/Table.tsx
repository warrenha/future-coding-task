import { Table as TableCn, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import type { AnyObject } from '@/models/common'
import type { ClassNameProps } from '@/utils'

export type Column = {
    title?: string | null,
    field: string,
    fieldText?: string,  // text to show for a url link
    className?: string | null,
    type?: 'text' | 'link' | 'image' // default 'text'
}

export type Row = AnyObject  // todo use generics instead, incude 'id'

type Props = {
    columns: Column[]
    data: Row[]
    caption?: string | null
}
& ClassNameProps

/*
 * - - - - - - - - - - - - - - -
 *
 * Table component
 *
 * - - - - - - - - - - - - - - -
 */
export const Table = (props: Props) => {
    const { columns, data, caption, className } = props

    // - - - - - Render - - - - - //

    const renderColumn = (c: Column) => (
        <TableHead className={c.className||''} key={c.field} >
            { c.title||'' }
        </TableHead>
    )

    const renderContent = (r: Row, c: Column) => {
        const value = r[c.field]  // todo check for null/undefined, render ''
        const text = c.fieldText ? r[c.fieldText] : null
        return (
            (c.type === 'link') ? (
                <a href={value}>{text || 'Link'}</a>
            ) : (c.type === 'image') ? (
                <img src={value} alt={text || 'Image'} />
            ) : value
        )
    }

    const renderCell = (r: Row, c: Column) => {
        const key = `${r.id}-${c.field}`
        const content = renderContent(r, c)
        return (
            <TableCell key={key} className={c.className||''} >
                {content}
            </TableCell>
        )
    }

    const renderRow = (r: Row) => (
        <TableRow>
            { columns.map(c => renderCell(r, c)) }
        </TableRow>
    )

    return (
        <TableCn
            data-id={props['data-id'] || 'Table'}
            className={className}>
            { caption && (caption.length > 0) && (
                <TableCaption>{caption}</TableCaption>
            )}
            <TableHeader>
                <TableRow>
                    { columns.map(renderColumn) }
                </TableRow>
            </TableHeader>
            <TableBody>
                { data.map(renderRow) }
            </TableBody>
        </TableCn>
    )
}
