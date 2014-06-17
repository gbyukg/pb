@echo off
rem *******************************************************************
rem Copyright 1992-2003 iAnywhere Solutions, Inc.  All rights reserved.
rem *******************************************************************
if %1. == . goto usage
if %2. == . goto usage
    if not exist %2.db goto ok1
	echo Database %2 exists.
	echo You must "dberase" it first.
	goto done
    :ok1
    if not exist unload\*.* goto ok2
	echo Directory UNLOAD exists, but is needed for rebuilding.
	echo You must remove it first.
	goto done
    :ok2
    set pwd=%3
    if %pwd%. == . set pwd=SQL
    dbunload -c "uid=DBA;pwd=%pwd%;dbf=%1" -an %2 unload
    set pwd=
    goto done
:usage
    echo Usage: rebuild {olddb} {newdb} [{dba-password}]
    echo        Unloads "{olddb}.db", then creates "{newdb}.db".
    echo        Do not specify ".db" in the database names.
    goto done
:done
