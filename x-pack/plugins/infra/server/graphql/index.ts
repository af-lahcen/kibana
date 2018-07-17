/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { rootSchema } from '../../common/graphql/root/schema.gql';
import { fieldsSchema } from './fields/schema.gql';
import { nodesSchema } from './nodes/schema.gql';

export const schemas = [rootSchema, nodesSchema, fieldsSchema];