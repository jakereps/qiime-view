// ----------------------------------------------------------------------------
// Copyright (c) 2016--, QIIME development team.
//
// Distributed under the terms of the Modified BSD License.
//
// The full license is in the file LICENSE, distributed with this software.
// ----------------------------------------------------------------------------

import React from 'react';

import Header from './Header';
import Input from './Input';

const App = () => (
    <div className="container-fluid">
        <div className="col-md-10 col-md-offset-1">
            <Header />
            <Input />
        </div>
    </div>
);

export default App;
