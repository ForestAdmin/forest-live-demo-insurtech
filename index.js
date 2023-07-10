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

        first_name: firstName,
        last_name: lastName,
        date_of_birth: birthdate,
        email_address: faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase(), randomEmailDomain),
        phone_number: phone,
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



 agent.customizeCollection('insurers', insurers => {

  insurers.addAction('add fake insurer', {
        scope: 'Global',
        execute: async (context, resultBuilder) => {
          const insurersToCreate = [];

          for (let i = 0; i < 10; i++) {
            let prevInsurerId = null;
            let insurerId = null;

            do {
              insurerId = faker.datatype.number({
                'min': 10,
                'max': 1000000
              });
            } while (insurerId === prevInsurerId);

            prevInsurerId = insurerId;

            const insurerName = faker.company.name();
            const address = faker.address.streetAddress();
            const phoneNumber = faker.phone.number();

            insurersToCreate.push({
              insurer_id: insurerId,
              insurer_name: insurerName,
              address: address,
              phone_number: phoneNumber,
            });
          }
          await  context.collection.create(insurersToCreate);
          // await context.database.models.insurers.bulkCreate(insurersToCreate);

          return resultBuilder.success('Insurers successfully created');
        },
      });

 })


  agent.customizeCollection('claims', claims => {
    claims.addAction('Approve a Claim', {
      scope:'Single',
      execute: async (context, resultBuilder) => {
        return resultBuilder.success('Claim Approved');
      },
    })
  })

  agent.customizeCollection('policies', policies => {
    policies.addAction('Renew Policie', {
      scope:'Single',
      execute: async (context, resultBuilder) => {
        return resultBuilder.success('Policie renewed');
      },
    })
  })

agent.customizeCollection('insurance_agents', insuranceAgent => {
  insuranceAgent.addAction('Add Insurance Agent', {
    scope: 'Global',

    execute: async (context, resultBuilder) => {
      const insuranceAgentTocreate = [];
      for (let i = 0; i < 10; i++) {
        let prevInsuranceAgentId = null;
        let insuranceAgentId = null;

        do {
          insuranceAgentId = faker.datatype.number({
            'min': 10,
            'max': 1000000
          });
        } while (insuranceAgentId === prevInsuranceAgentId);

        prevInsuranceAgentId = insuranceAgentId;

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const emailDomains = ["gmail.com", "yahoo.fr", "example.com", "hotmail.com"]
        const randomEmailDomain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
        const phone = faker.phone.number();

        insuranceAgentTocreate.push ({
          agent_id:insuranceAgentId,
          first_name: firstName,
          last_name: lastName,
          email_address: faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase(), randomEmailDomain),
          phone_number: phone,
        });
      }
      await context.collection.create(insuranceAgentTocreate);


      return resultBuilder.success('Insurance Agent added');
    },
  })
})

  agent.customizeCollection('payments', payments => {
    payments.addAction('Approve payment', {
      scope:'Single',
      execute: async (context, resultBuilder) => {
        return resultBuilder.success('Payment Approved');
      },
    })
  })


  agent.customizeCollection('vehicles', vehicles => {

    vehicles.addAction('add fake vehicles', {
          scope: 'Global',
          execute: async (context, resultBuilder) => {
            const vehiclesToCreate = [];

            for (let i = 0; i < 10; i++) {
              let prevVehiclesId = null;
              let vehiclesId = null;

              do {
                vehiclesId = faker.datatype.number({
                  'min': 10,
                  'max': 1000000
                });
              } while (vehiclesId === prevVehiclesId);

              prevVehiclesId = vehiclesId;

              const Make = faker.vehicle.type() ;
              const Model = faker.vehicle.model();
              const Year = faker.phone.number();
              const Vin = faker.vehicle.manufacturer();

              vehiclesToCreate.push({
                vehicle_id: vehiclesId,
                model:Model,
                make: Make,
                year: Year,
                vin: Vin,
              });
            }
            await  context.collection.create(vehiclesToCreate);




            return resultBuilder.success('vehicles successfully created');
          },
        });

   })


