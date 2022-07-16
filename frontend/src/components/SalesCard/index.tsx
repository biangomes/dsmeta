import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'
import { BASE_URL } from "../../utils/request"
import { Sale } from "../../models/sale"

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    // Declaração de um estado dentro de um componente React
    const [minDate, setMinDate] = useState(min)      // data mínima do DatePicker
    const [maxDate, setMaxDate] = useState(max)      // data mínima do DatePicker

    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {

        const dmin = minDate.toISOString().slice(0, 10)
        const dmax = maxDate.toISOString().slice(0, 10)

        //console.log(dmin)

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                setSales(response.data.content)
            })
    }, [minDate, maxDate])

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>


                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => { setMinDate(date) }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => { setMaxDate(date) }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>


                <div>
                    <table className="dsmeta-sales-table">

                        <thead>
                            <tr>
                                <th className="show992px">ID</th>
                                <th className="show576px">Data</th>
                                <th>Vendedor</th>
                                <th className="show992px">Visitas</th>
                                <th className="show992px">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>


                        <tbody>

                            {sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td className="show992px">{sale.id}</td>
                                        <td className="show576px">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <th className="show992px">{sale.visited}</th>
                                        <th className="show992px">{sale.deals}</th>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <NotificationButton saleId={sale.id} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard
