/*
 * Data reader class to create an Array of {@link Ext.data.Model} objects from
 * Array of Objects that represent data records. This reader is similar to
 * Ext.data.reader.Array except that each row in consumed dataset should be an Object,
 * not an Array. Oh, and it's assumed that all records have the same set of properties
 * and we don't care for typecasting.
 *  
 * Version 0.9.
 *  
 * Copyright (c) 2012 Alexander Tokarev.
 *
 * This code is licensed under the terms of the Open Source LGPL 3.0 license.
 * Commercial use is permitted to the extent that the code/component(s) do NOT
 * become part of another Open Source or Commercially licensed development library
 * or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
 */

Ext.define('Ext.ux.data.reader.Object', {
    extend: 'Ext.data.reader.Reader',
    alias:  'reader.object',
    
    // For Object reader, methods in the parent that use these properties
    // must not use defaults
    totalProperty: undefined,
    successProperty: undefined,
    messageProperty: undefined,
    
    statics: {
        internalIdCounter: 0
    },
    
    extractData: function(root) {
        var me = this,
            records = [],
            Model = me.model,
            convert = me.convertValues,
            node, record;
        
        if ( !root.length && Ext.isObject(root) ) {
            root = [root];
        };
        
        for ( var i = 0, l = root.length; i < l; i++ ) {
            node = root[i];
            
            record = new Model(undefined, me.generateInternalId(), node, node);
            record.phantom = false;
            
            records.push(record);
        };
        
        return records;
    },
    
    getIdProperty: function() {
        return this.idProperty;
    },
    
    createFieldAccessExpression: function() {
        return '"";';
    },
        
    generateInternalId: function() {
        return 'rec-obj-' + Ext.ux.data.reader.Object.internalIdCounter++;
    }
});
