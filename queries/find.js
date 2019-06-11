const find = {
  findByEmail: 'SELECT * FROM users WHERE email = $1',
  findById: 'SELECT * FROM cars WHERE car_id = $1 LIMIT 1',
  findAll: 'SELECT * FROM cars',
  findAllByStatus: 'SELECT * FROM cars WHERE status = \'\available\'',
  findAllByStatusAndPrice: 'SELECT * FROM cars WHERE status = \'\available\' AND price BETWEEN $1 AND $2 ORDER BY price',
  findOrders: 'SELECT * FROM orders WHERE order_id = $1 LIMIT 1',
  findUserOrders: 'SELECT * FROM orders WHERE buyer = $1',
};

export default find;
