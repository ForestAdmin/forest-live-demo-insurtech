require('dotenv').config();
const { createAgent } = require('@forestadmin/agent');
const { createSqlDataSource } = require('@forestadmin/datasource-sql');
const { faker } = require('@faker-js/faker');

const dialectOptions = {};

if (process.env.DATABASE_SSL && JSON.parse(process.env.DATABASE_SSL.toLowerCase())) {
  // Set to false to bypass SSL certificate verification (useful for self-signed certificates).
  const rejectUnauthorized =
    process.env.DATABASE_REJECT_UNAUTHORIZED &&
    JSON.parse(process.env.DATABASE_REJECT_UNAUTHORIZED.toLowerCase());
  dialectOptions.ssl = !rejectUnauthorized
    ? {
        require: true,
        rejectUnauthorized,
      }
    : true;
}

// Create the Forest Admin agent.
/**
 * @type {import('@forestadmin/agent').Agent<import('./typings').Schema>}
 */
const agent = createAgent({
  authSecret: process.env.FOREST_AUTH_SECRET,
  envSecret: process.env.FOREST_ENV_SECRET,
  isProduction: process.env.NODE_ENV === 'production',
  // Autocompletion of collection names and fields
  typingsPath: './typings.ts',
  typingsMaxDepth: 5,
})
  // Connect your datasources.
  .addDataSource(
    createSqlDataSource({
      uri: process.env.DATABASE_URL,
      schema: process.env.DATABASE_SCHEMA,
      dialectOptions,
    }),
  );

// Add customizations here.
// agent.customizeCollection('collectionName', collection => ...);

agent.customizeCollection('customers', customers => {
  customers.addAction('add fake customer', {
    scope: 'Global',
    execute: async (context, resultBuilder) => {
      const customersToCreate = [];

      for (let i = 0; i < 10; i++) {
        let prevCustomerId = null;
        let customerId = null;
        
        do {
          customerId = faker.datatype.number({
            'min': 10,
            'max': 1000000
          });
        } while (customerId === prevCustomerId);
        
        prevCustomerId = customerId;
       const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const emailDomains = ["gmail.com", "yahoo.fr", "example.com", "hotmail.com"]
        const randomEmailDomain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
        const birthdate = faker.date.birthdate();
        const phone = faker.phone.number();
        const address = faker.address.streetAddress();
        console.log(customerId)
        customersToCreate.push({
           
        //  customerId: customerId,
        
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birthdate,
        emailAddress: faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase(), randomEmailDomain),
        phoneNumber: phone,
        address: address,
        });
       }
     
      await  context.collection.create(customersToCreate);
      

    //  res.status(200).send({ success: 'Customers  successfully created' });
     return resultBuilder.success('Customers  successfully created');
    },
  });
});

agent
  // Expose an HTTP endpoint.
  .mountOnStandaloneServer(process.env.PORT || process.env.APPLICATION_PORT)
  // Start the agent.
  .start();
