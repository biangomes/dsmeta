import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'


function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>


                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => {}}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => {}}
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
                            <tr>
                                <td className="show992px">1</td>
                                <td className="show576px">08/07/2022</td>
                                <td>Anakin</td>
                                <th className="show992px">15</th>
                                <th className="show992px">11</th>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton/>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="show992px">2</td>
                                <td className="show576px">07/07/2022</td>
                                <td>Beatriz</td>
                                <th className="show992px">15</th>
                                <th className="show992px">11</th>
                                <td>R$ 45300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton/>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="show992px">3</td>
                                <td className="show576px">06/07/2022</td>
                                <td>Ana</td>
                                <th className="show992px">15</th>
                                <th className="show992px">11</th>
                                <td>R$ 5300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard
