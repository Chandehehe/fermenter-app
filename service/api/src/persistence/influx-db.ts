import * as Influx from 'influx';

const { INFLUXDB_USERNAME, INFLUXDB_PASSWORD, INFLUXDB_HOST, INFLUX_DB_DATABASE_NAME } = process.env;

const schema = [
  {
    measurement: 'readings',
    fields: {
      temperature: Influx.FieldType.FLOAT,
    },
    tags: ['userId', 'fermentationId', 'sensorName'],
  },
];

export const influxDBClient = new Influx.InfluxDB({
  host: INFLUXDB_HOST,
  username: INFLUXDB_USERNAME,
  password: INFLUXDB_PASSWORD,
  database: INFLUX_DB_DATABASE_NAME,
  schema,
});
