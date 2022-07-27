import { rest } from 'msw'
import { USERS } from './fixtures/users'
import { ORDERS } from './fixtures/orders'
import { INVOICES } from './fixtures/invoices'

export const handlers = [
    rest.get(
        `${process.env.REACT_APP_API_URL || ''}/api/people`,
        (req, res, ctx) => {
            return res(
                // Delays response for 2000ms.
                ctx.delay(2000),
                ctx.json(USERS)
            )
        }
    ),
    rest.get(
        `${process.env.REACT_APP_API_URL || ''}/api/orders`,
        (req, res, ctx) => {
            return res(
                // Delays response for 2000ms.
                ctx.delay(2000),
                ctx.json(ORDERS)
            )
        }
    ),
    rest.get(
        `${process.env.REACT_APP_API_URL || ''}/api/invoices`,
        (req, res, ctx) => {
            return res(
                // Delays response for 2000ms.
                ctx.delay(2000),
                ctx.json(INVOICES)
            )
        }
    ),
]
