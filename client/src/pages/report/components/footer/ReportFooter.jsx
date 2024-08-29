import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArrayUtils from '../../../../common/utils/ArrayUtils';
import {
  getError,
  getFormDataById,
  getStatus,
} from '../../../../features/forms';
import {
  getResponseData,
  getError as getResponseError,
  getStatus as getResponseStatus,
} from '../../../../features/userResponse';
import Constants from '../../../../helper/Constants';
import { getRows } from '../../utils/ChartUtils';
import ScoresCell from './ScoresCell';

const getTableRows = (responseData, formData) => {
  const rows = getRows(responseData, formData);
  if (rows.length < 1) return rows;
  const allAverage = ArrayUtils.averageOfObjectArrays(rows);
  if (!allAverage || allAverage.length < 1) return rows;
  rows.push(allAverage);
  return rows;
};

const ReportFooter = ({ ...props }) => {
  const [rows, setRows] = useState([]);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const responseStatus = useSelector(getResponseStatus);
  const responseError = useSelector(getResponseError);
  const { formId } = useParams();
  const formData = useSelector((state) => getFormDataById(state, formId));
  const responseData = useSelector(getResponseData);

  useEffect(() => {
    const fetchedRows = getTableRows(responseData, formData);
    setRows(fetchedRows);
    return () => {
      setRows([]);
    };
  }, [responseData, formData]);

  if (status === 'loading' || responseStatus === 'loading')
    return <div>LOADING...</div>;

  if (status === 'failed') return <div>{error}</div>;

  if (responseStatus === 'failed') return <div>{responseError}</div>;

  return responseData && formData ? (
    <TableContainer {...props}>
      <Table sx={{ minWidth: 650 }} size="small" padding="none">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'primary.main', color: 'white' }}>
            {Constants.CATEGORY.map((category) => (
              <TableCell
                align="center"
                key={category}
                sx={{ color: 'white', borderLeft: '2px solid white' }}
              >
                <div className="text-[10px] p-1">{category}</div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.length > 0 ? (
            rows
              ?.map((row) => (
                <TableRow key={row[0]}>
                  {Object.keys(row)?.map((key, index) => (
                    <ScoresCell
                      score={row[key]}
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${row[key]}${index}`}
                    />
                  ))}
                </TableRow>
              ))
              .at(-1)
          ) : (
            <TableRow>
              <ScoresCell score={0} />
              <ScoresCell score={0} />
              <ScoresCell score={0} />
            </TableRow>
          )}
          <TableRow>
            {Constants.CATEGORY.map((category) => (
              <TableCell
                sx={{ borderBottomWidth: 0 }}
                align="center"
                key={category}
              >
                <div className="text-[10px] p-1 font-medium">
                  Average score of{' '}
                  <span className="text-blue font-extralight underline underline-offset-2">
                    {category}
                  </span>{' '}
                  category in sections{' '}
                  <span className="italic">
                    {`"${Constants.SECTIONS.map(({ name }) => name).join(
                      ', '
                    )}"`}
                  </span>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;
};

export default ReportFooter;
