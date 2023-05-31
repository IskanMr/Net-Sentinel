import DefaultLayout from "../layouts/DefaultLayout";

import Button from "../components/utils/Button";

import Styles from "../styles/pages/conHistory.module.css";

const testData = [
  {
    time: "9:00 AM",
    ip: "192.168.0.1",
    identity: "User123",
    status: "Connected",
  },
  {
    time: "10:30 AM",
    ip: "192.168.0.2",
    identity: "User456",
    status: "Connected",
  },
  {
    time: "12:15 PM",
    ip: "192.168.0.3",
    identity: "User789",
    status: "Disconnected",
  },
];

export default function ConnectionHistory() {
  return (
    <DefaultLayout seoTitle="Connection History">
      <div className={Styles.Container}>
        <h1 style={{ marginBottom: 12 }}>Connection History</h1>
        <div className={Styles.Card}>
          <table className={Styles.tablex}>
            <thead>
              <tr>
                <th>Waktu</th>
                <th>IP</th>
                <th>Connection Identity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {testData.map((data) => (
                <tr>
                  <td>{data.time}</td>
                  <td>{data.ip}</td>
                  <td>{data.identity}</td>
                  <td>{data.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
}
