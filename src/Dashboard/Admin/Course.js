import React,{useState} from 'react'
import Layout from '../../Components/Layout1/Layout'
import Sidebar from './Sidebar';
import { Select } from "antd";
const { Option } = Select;

function Course() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState([
        {
          name:'Architecture'
        },
        {
          name:'Design'
        }
      ]);

      const handleCreate = async (e) => {
        e.preventDefault();
        // try {
        //   const productData = new FormData();
        //   productData.append("name", name);
        //   productData.append("description", description);
        //   productData.append("price", price);
        //   productData.append("quantity", quantity);
        //   productData.append("photo", photo);
        //   productData.append("category", category);
        //   const { data } = axios.post(
        //     "/product/create-product",
        //     productData
        //   );
        //   if (data?.success) {
        //     toast.error(data?.message);
        //   } else {
        //     toast.success("Product Created Successfully");
        //     navigate("/dash/admin/products");
        //   }
        // } catch (error) {
        //   console.log(error);
        //   toast.error("something went wrong");
        // }
      };

  return (
   <Layout>
        <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <h1>Add course</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setDepartment(value);
                }}
              >
                {department?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Course Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </Layout>
      
  )
}

export default Course
