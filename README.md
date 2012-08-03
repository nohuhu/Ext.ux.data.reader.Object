Ext.ux.data.reader.Object
=========================

Auto-vivifying data reader class for Ext.data.Store.

This data reader class creates an Array of {@link Ext.data.Model} objects from
Array of Objects that represent data records. This reader is similar to
Ext.data.reader.Array except that each row in consumed dataset should be an Object,
not an Array. Oh, and it's assumed that all records have the same set of properties
and we don't care for typecasting.

Tested with:

    - MSIE 6+
    - Chrome 6+
    - Firefox 3.6+
    - Opera 11
    - Safari 4+

This extension is released under GPL 3.0 license.

Commercial use is permitted to the extent that the code/component(s) do NOT
become part of another Open Source or Commercially licensed development library
or toolkit without explicit permission.

Copyright (c) 2012 by Alexander Tokarev, <nohuhu@nohuhu.org>.
