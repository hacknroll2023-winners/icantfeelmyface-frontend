import React from "react";
import { useState } from "react";

import {
  Stack,
  Select,
  Flex,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import AppHeader from "../components/AppHeader/AppHeader";
import { Link } from "react-router-dom";
import axios from "axios";

function LecturerChooseClass() {
  const [classCode, setClassCode] = useState("");
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios.get("http://25.72.31.59:8000/api/class/").then((res) => {
      console.log(res.data);
      setData(res.data);

      // classCodesData = res.data;
    });
  }, []);

  const handleSubmit = () => {
    console.log(classCode);
  };

  return (
    <>
      <Stack padding="5" spacing="5">
        <AppHeader />

        <Flex justifyContent="center">
          <Stack
            spacing="10"
            width="50%"
            borderRadius="20"
            backgroundColor="blue.800"
            padding="10"
          >
            <FormControl>
              <FormLabel>Class Code</FormLabel>
              <Select
                mb="10"
                placeholder="Select Class"
                onChange={(e) => {
                  setClassCode(e.target.value);
                }}
              >
                {data.map((classCode) => (
                  <option value={classCode.name}>{classCode.name}</option>
                ))}
              </Select>

              <Link to={`${classCode}`}>
                <Button
                  style={{ width: "100%" }}
                  onClick={() => handleSubmit()}
                >
                  Choose Class to view Attendance
                </Button>
              </Link>
            </FormControl>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}

export default LecturerChooseClass;
