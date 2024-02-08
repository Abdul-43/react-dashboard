import { useState } from "react";
import { products } from "../../data";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="avatar">
          <img src={params.row.img || "./noavatar.png"} alt="" />
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 100,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Price",
    width: 110,
  },
  {
    field: "inStock",
    headerName: "Instock",
    width: 90,
    type:"boolean"
  },
];
function Products() {
  const [open, setOpen] = useState(false);

  return (
    <div className="productTable">
      <div className="title">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add new Product</button>
      </div>
      <div>
        <DataTable slug="product" columns={columns} rows={products} />
        {open && <Add setOpen={setOpen} columns={columns} slug="product" />}
      </div>
    </div>
  );
}

export default Products;
